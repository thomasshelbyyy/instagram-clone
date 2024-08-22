
import { useEffect } from "react"
import ChatBox from "../../components/Message/chatBox"
import ContactBox from "../../components/Message/contactBox"
import MainLayout from "../../layouts"

const MessagePage = () => {
    useEffect(()=> {
        document.title = "Instagram | Message"
    }, [])
    return (
        <MainLayout>
            <div className="h-full w-full flex overflow-hidden">
                <ContactBox />
                <ChatBox />
            </div>

        </MainLayout>
    )
}

export default MessagePage
