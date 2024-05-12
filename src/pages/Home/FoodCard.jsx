import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {Button} from "@/components/ui/button.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import PropTypes from "prop-types";


const FoodCard = ({food}) => {
    const {id, image, name, donator, quantity, location, expire, note} = food;
    const {user, avatar} = donator;

    return (
        <Card>
            <CardHeader>
                <img src={image} alt={name} className='rounded-xl' />
            </CardHeader>
            <CardHeader className='pt-0'>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    <div>Quantity: {quantity}</div>
                    <div>Location: {location}</div>
                    <div>Valid upto: {expire}</div>
                </CardDescription>
            </CardHeader>
            <Separator/>
            <CardContent className='flex items-center gap-2 mt-3'>
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{user}</AvatarFallback>
                </Avatar>
                <CardDescription>{user}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    View Detail
                </Button>
            </CardFooter>
            <CardContent>
                <CardDescription>Note: {note}</CardDescription>
            </CardContent>
        </Card>

    );
};

FoodCard.propTypes = {
    food: PropTypes.shape({})
}

export default FoodCard;
