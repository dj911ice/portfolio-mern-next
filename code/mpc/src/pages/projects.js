import Header from "@/components/Header";
import {Button, Carousel, Typography} from "@material-tailwind/react";

function Projects() {

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Awesome Projects</h2>
                    <div>
                        <Carousel
                            transition={{ duration: 1.5 }}
                            loop={true}
                            autoplay={true}
                            autoplayDelay={3500}
                            className="rounded-xl">
                            <div className="relative h-full w-full">
                                <img
                                    src="/images/mytestappjpd-sm.png"
                                    alt="Dance Products"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                                    <div className="w-3/4 text-center md:w-2/4">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Dance Products eCommerce Application
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            Ruby on Rails portfolio project
                                        </Typography>
                                        <div className="flex justify-center gap-2">
                                            <Button size="lg" color="white"
                                                    onClick={event =>
                                                        window.open("https://youtu.be/PQXwOXdSj9U", "_blank")}
                                            >
                                                Screencast
                                            </Button>
                                            <Button size="lg" color="white" variant="text"
                                                    onClick={event =>
                                                        window.open("https://github.com/dj911ice/nameofapp", "_blank")}
                                            >
                                                Code
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full w-full">
                                <img
                                    src="/images/fbi_ruby.png"
                                    alt="Fizz Buzz Interactive in Ruby"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Fizz Buzz Interactive
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            Output to popular Fizz Buzz problem but interactive written in Ruby.
                                        </Typography>
                                        <div className="flex gap-2">
                                            <Button size="lg" color="white"
                                                    onClick={event =>
                                                        window.open("https://www.youtube.com/watch?v=QkaiDw4WEoM", "_blank")}
                                            >
                                                Screencast
                                            </Button>
                                            <Button size="lg" color="white" variant="text" disabled={true}>
                                                Download: Coming Soon!
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full w-full">
                                <img
                                    src="/images/HabiticaAbroad_dashboad.PNG"
                                    alt="Habitica Abroad: Task webapp in C# & .Net framework"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Habitica Abroad
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            Task webapp in C# & .Net framework
                                        </Typography>
                                        <div className="flex gap-2">
                                            <Button size="lg" color="white"
                                                    onClick={event =>
                                                        window.open("https://youtu.be/eyWo9FHxzB4", "_blank")}
                                            >
                                                Screencast
                                            </Button>
                                            <Button size="lg" color="white" variant="text" disabled={true}>
                                                Code
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full w-full">
                                <img
                                    src="/images/GCLibrary_sc.PNG"
                                    alt="Grand Circus Library"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Grand Circus Library
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            Console application written C#
                                        </Typography>
                                        <div className="flex gap-2">
                                            <Button size="lg" color="white"
                                                    onClick={event =>
                                                        window.open("https://youtu.be/FdY97Lx7Vo4", "_blank")}
                                            >
                                                Screencast
                                            </Button>
                                            <Button size="lg" color="white" variant="text" disabled={true}>
                                                Code
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Projects