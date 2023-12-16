import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('be3f62f9-f8e0-4726-ae46-c94bd0a51f35', props.user.username, props.user.secret)
    return (<div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )
}
export default ChatsPage