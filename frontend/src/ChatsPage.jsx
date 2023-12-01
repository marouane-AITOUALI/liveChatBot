import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='98201e17-00b8-444a-ae47-986e406161e1'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage