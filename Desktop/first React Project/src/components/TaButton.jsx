function TaButton({children , onSelect , isSelected}) {

    return(
       <li><button className={isSelected ? 'active': undefined}onClick={onSelect}>{children}</button></li>
    );
}

export default TaButton;