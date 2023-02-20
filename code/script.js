arra = ['Elvis Has Left The Building','When the Rubber Hits the Road','Birds of a Feather Flock Together','Under the Weather', 'Put a Sock In It','A Cold Day in Hell', 'Give a Man a Fish', 'Up In Arms', 'You Can\'t Judge a Book By Its Cover']

function writeAMessage(arra) {
    const rando = Math.floor(Math.random() * arra.length)
    alert(arra[`${rando}`])
}