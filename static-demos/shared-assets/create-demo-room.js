const newRoomEndpoint = 'https://kimberlee.daily.co/hello',
      tokenEndpoint = 'https://kimberlee.daily.co/hello';

async function createMtgRoom() {
  try {
    let response = await fetch(newRoomEndpoint),
        room = await response.json();
    return room;
  } catch (e) {
    console.error(e);
  }
}

async function createMtgLinkWithToken(room, properties={}) {
  try {
    let response = await fetch(
      tokenEndpoint, {
        method: 'POST',
        body: JSON.stringify({ properties: {
          room_name: room.name, ...properties
        }})
      },
    );
    let token = await response.text();
    return `${room.url}?t=${token}`;
  } catch (e) {
    console.error(e);
  }
}
