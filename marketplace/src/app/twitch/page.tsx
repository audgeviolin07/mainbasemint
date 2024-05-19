import React from 'react'

export default function Twitch() {
  const streamer = 'gronkhtv';

  return (
    <div style={{
      backgroundImage: 'url(/electro_giants.jpg)',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px' // Add padding to create space around the content
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', // Limit the width to 80% of the parent div
        height: '90%', // Limit the height to 80% of the parent div
        margin: '0 auto' // Center the div
      }}>
        <iframe 
          src={`https://player.twitch.tv/?channel=${streamer}&parent=localhost`} 
          height="100%" 
          width="70%" 
          style={{
            border: 'none',
            overflow: 'hidden'
          }}
          allowFullScreen={true}>
        </iframe>
        <iframe 
          id="chat_embed"
          src={`https://www.twitch.tv/embed/${streamer}/chat?parent=localhost`}
          height="100%"
          width="30%">``
        </iframe>
      </div>
    </div>
  )
}