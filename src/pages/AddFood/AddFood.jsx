import {Helmet} from "react-helmet-async";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Button} from "@/components/ui/button.jsx";


const AddFood = () => {
    return (
        <>
            <Helmet>
                <title>Food Hub | Add Food</title>
            </Helmet>
            <div className='my-12'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-center'>Add Food</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className='grid gap-4'>
                            <div className="grid md:grid-cols-2 w-full items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Food Name</Label>
                                    <Input id="name" placeholder="Name of your food"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="framework">Food Quantity</Label>
                                    <Input type='number' id="name" placeholder="Food quantity"/>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 w-full items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Pickup Location</Label>
                                    <Input id="name" placeholder="Pickup location"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="framework">Expiration Date</Label>
                                    <Input id="name" placeholder="Expiration date"/>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 w-full items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Additional Notes</Label>
                                    <Input id="name" placeholder="Additional notes"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="framework">Food Image</Label>
                                    <Input id="name" placeholder="Link of food image"/>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            Donate
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </>
    );
};

export default AddFood;
