import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

interface ReservationEmailData {
  name: string;
  email: string;
  phone?: string | null;
  date: string;
  time: string;
  guests: string;
  message?: string | null;
}

export async function sendReservationNotification(reservation: ReservationEmailData) {
  try {
    const gmail = await getGmailClient();

    const subject = `New Reservation - ${reservation.name}`;
    const body = `
New reservation received at Debut Bar & Restaurant:

Customer Name: ${reservation.name}
Email: ${reservation.email}
Phone: ${reservation.phone || 'Not provided'}
Date: ${reservation.date}
Time: ${reservation.time}
Number of Guests: ${reservation.guests}
${reservation.message ? `\nSpecial Requests:\n${reservation.message}` : ''}

This reservation is currently pending confirmation.
Please log in to the admin dashboard to manage this reservation.

---
Debut Bar & Restaurant
10 Dunlop St E, Barrie, ON L4M 1A3
    `.trim();

    const message = [
      'Content-Type: text/plain; charset=utf-8',
      'MIME-Version: 1.0',
      `To: info@debutbar.ca`,
      `Cc: debutbarandrestraunt@gmail.com`,
      `Subject: ${subject}`,
      '',
      body
    ].join('\n');

    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('Reservation notification email sent successfully');
  } catch (error) {
    console.error('Failed to send reservation notification email:', error);
    throw error;
  }
}
