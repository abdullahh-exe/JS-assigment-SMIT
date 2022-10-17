class Automobile
{
    constructor(name, model, colour, type)
    {
        this.name = name;
        this.model = model;
        this.colour = colour;
        this.type = type;
    }

    start()
    {
        return "Ready to drive";
    }
    opendoor()
    {
        return "Door is Opened";
    }
}

class Car extends Automobile
{
    constructor(name, model, colour, type, NumOFdoor, maxspeed)
    {
        super(name,model,colour,type);
        this.NumOFdoor = NumOFdoor;
        this.maxspeed = maxspeed;
    }


}

class Truck extends Automobile
{
    constructor(name, model, colour, type,noOfwheels)
    {
        super(name,model,colour,type);
        this.noOfwheels = noOfwheels;
    }
}

class Bus extends Automobile
{
    constructor(name, model, colour, type,noOfSeats)
    {
        super(name,model,colour,type);
        this.noOfSeats = noOfSeats

    }
} 


var c = new Car("Suzuki","Every","Silver","Auto",4,140);

console.log(c);

