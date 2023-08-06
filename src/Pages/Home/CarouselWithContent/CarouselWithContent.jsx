import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
    return (
        <Carousel style={{fontFamily: 'Nunito Sans, sans-serif'}}>
            <div className="relative h-[700px] w-full" style={{fontFamily: 'Nunito Sans, sans-serif'}}>
                <img
                    src="../../../../public/colleagues1.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-[700px] w-full place-items-center bg-[#14212b]/75">
                    <div className="w-3/4 text-center md:w-3/4" style={{fontFamily: 'Nunito Sans, sans-serif'}}>
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:mb-12  text-[18px]"

                        >

                            WHAT&apos;S MISSING IN YOUR BUSINESS?

                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="md:mb-4 text-[40px] md:text-4xl lg:text-[130px] font-serif"
                        >
                            People Cohesion
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:my-12  text-[18px]"

                        >

                            We can tap into our collective mindshare

                        </Typography>
                        <div className="mt-4 flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Learn More
                            </Button>
                            <Button className="border hover:bg-white hover:text-blue-gray-900" size="lg" color="white" variant="text">
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[700px] w-full">
                <img
                    src="../../../../public/colleagues1.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-[700px] w-full place-items-center bg-[#14212b]/75">
                    <div className="w-3/4 text-center md:w-3/4">
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:mb-12  text-[18px]"

                        >

                            WHAT&apos;S MISSING IN YOUR BUSINESS?

                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="md:mb-4 text-[40px] lg:text-[130px] font-serif"
                        >
                            Team Build Up
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:my-12  text-[18px]"

                        >

                            We can tap into our collective mindshare

                        </Typography>
                        <div className="mt-4 flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Learn More
                            </Button>
                            <Button className="border hover:bg-white hover:text-blue-gray-900" size="lg" color="white" variant="text">
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[700px] w-full">
                <img
                    src="../../../../public/colleagues1.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-[700px] w-full place-items-center bg-[#14212b]/75">
                    <div className="w-3/4 text-center md:w-3/4">
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:mb-12  text-[18px]"

                        >

                            WHAT&apos;S MISSING IN YOUR BUSINESS?

                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="md:mb-4 text-[40px] md:text-4xl lg:text-[130px] font-serif"
                        >
                            Team Leadership
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:my-12  text-[18px]"
                        >

                            We can tap into our collective mindshare

                        </Typography>
                        <div className="mt-4 flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Learn More
                            </Button>
                            <Button className="border hover:bg-white hover:text-blue-gray-900" size="lg" color="white" variant="text">
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}