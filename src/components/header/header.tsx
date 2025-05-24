import './header.css'

type HeaderProps = {
    headerTitle: string;
}

export default function Header({ headerTitle }: HeaderProps){
    return(
        <div className="header">
            <span className="header-title">{headerTitle}</span>
        </div>
    )
}