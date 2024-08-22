import { useEffect } from "react";
import ProfileAvatar from "../../components/profileAvatar";
import ProfileCTA from "../../components/profileCTA";
import ProfilePosts from "../../components/profilePosts";
import UserBio from "../../components/userBio";
import MainLayout from "../../layouts";

const ProfilePage = () => {
    useEffect(()=> {
        document.title = "Instagram | Profile"
    }, [])
    return (
        <MainLayout>
            <div className="md:px-5 lg:px-10 w-full bg-black pb-12 md:pb-2">
                <div className="md:full lg:w-[90%]">
                    <div className="flex gap-8 md:gap-16 px-6 md:px-10 lg:px-12 items-center">
                        <ProfileAvatar hasNewStory={true} />
                        <div>
                            <ProfileCTA username="thisis.usernmae" />
                            <div className="hidden md:flex">
                                <UserBio />
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden p-4">
                        <UserBio />
                    </div>

                </div>
                <div className="flex md:hidden pt-1 border-t border-gray-400 text-white text-sm">
                    <div className="text-center flex-1">
                        <p className="font-semibold">1,234</p>
                        <p className="text-gray-500">posts</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="font-semibold">666k</p>
                        <p className="text-gray-500">followers</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="font-semibold">234</p>
                        <p className="text-gray-500">following</p>
                    </div>
                </div>
                <ProfilePosts />
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
