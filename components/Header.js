//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => ( 
    <div className = "nav">
        <ul className="nav-list">
        <Link href = "/" className="nav-list">
    <a> Home </a>  
    </Link> 

    <Link href = "/about" className="nav-list">
    <a> About </a>  
    </Link>  

    <Link href = "/projects" className="nav-list">
    <a> Projects </a>  
    </Link>  
    
    <Link href = "/contact" className="nav-list">
    <a> Contact </a>  
    </Link>
        </ul>
    
     


    { /*About me styling*/ } 
    <style jsx> { `
              .nav {
                display: flex;
                justify-content: flex-end;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #d8e7f2;
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
                z-index: 10;
                height: 80px;
            }
            
.nav-list {
    display: flex;
    margin-right: 2rem;
}

@media (max-width: 28.75em) {
    .nav {
        justify-content: center;
    }
    .nav-list {
        margin: 0.5rem;
    }
}

.nav-list a {
    display: block;
    font-size: 2.2rem;
    padding: 2rem;
}



              
            ` } 
    </style> 
    </div>
)

export default Header