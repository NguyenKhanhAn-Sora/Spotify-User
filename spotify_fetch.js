async function getSpotifyTrack() {
  const clientId = '716212da027a4052bcfe4246b2ef3e2e';
  const clientSecret = 'b6acf5a5c31b4441a6b41fb07ef612b8';
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const basicAuth = Buffer.from(clientId + ':' + clientSecret).toString('base64');
  
  try {
    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + basicAuth,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    
    const id = '11dFghVXANMlKmJXsNCbNl';
    const response = await fetch(https://api.spotify.com/v1/tracks/, {
      headers: {
        Authorization: Bearer 
      }
    });
    
    const trackData = await response.json();
    console.log(JSON.stringify(trackData, null, 2));
    
    // Print the important fields for playing music
    console.log('\nFields needed for playing music:');
    console.log('- Preview URL:', trackData.preview_url);
    console.log('- External URLs:', trackData.external_urls);
    if (trackData.preview_url) {
      console.log('You can play the preview directly using the preview_url');
    } else {
      console.log('No preview URL available, may need to use Spotify Web Playback SDK');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

getSpotifyTrack();
