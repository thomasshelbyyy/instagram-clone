import HomeRight from "../../components/homeRight"
import Post from "../../components/post"
import StoryPreview from "../../components/storyPreview"
import MainLayout from "../../layouts"
import { magPole, phillipDeus } from "../../assets/profile/images"
import Navbar from "../../components/navbar"
import { useEffect } from "react"

const HomePage = () => {
    useEffect(()=> {
        document.title = "Instagram"
    }, [])
    return (
        <MainLayout>
            <Navbar />
            <div className="min-h-screen bg-black flex justify-center lg:justify-around lg:pr-[2%] items-start w-full pt-14 md:pt-2">
                <div className="">
                    <div className="flex gap-2 px-2">
                        <StoryPreview username="lakeng" hasNewStory={true} />
                        <StoryPreview username="lakeng" hasNewStory={false} />
                    </div>

                    <Post
                        avatar={magPole}
                        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis nam fuga explicabo veniam et incidunt illum quia! Ut, illo?"
                        comments={335}
                        image={phillipDeus}
                        likes={362}
                        username="leomessi"
                    />

                </div>

                <HomeRight />
            </div>
        </MainLayout>
    )
}

export default HomePage