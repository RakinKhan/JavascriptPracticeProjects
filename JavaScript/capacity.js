let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (addParty) {
        let newGuestCount = (this.guestCount + addParty)
        this.guestCount = newGuestCount
    },
    removeParty: function (minusParty) {
        let reducedGuestCount = (this.guestCount - minusParty)
        this.guestCount = reducedGuestCount
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
