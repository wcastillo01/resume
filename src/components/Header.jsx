export function Header(){ 
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p>Logo</p>
            </div>

            <div className="justify-content: end">      

                <ul style={{listStyle: 'none', display: "flex", gap: "2rem"}}>
                    <a href="#"><li>whoami</li></a>
                    <a href="#"> <li>hoja de vida</li></a>
                    <a href="#"><li>certificaciones</li></a>
                    <a href="#"><li>contacto</li></a>
                </ul>
              
            </div>
        </div>
    );

}

export default Header;