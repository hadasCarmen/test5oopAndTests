import {RegularTicket} from "./regularTicket.js"
export class VipTicket extends RegularTicket {
    constructor(price, ownerName = null) {
        super(price,ownerName)
        this.listBenefits=["Free alcohol","Free food","Hot towels"]
    }
}