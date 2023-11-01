const touches = [...document.querySelectorAll('.bouton' )];
const listekeycode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown',(e) => {
    const valeur = e.keycode.toString();
    calcaler(valeur)

} );

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calcaler(valeur)

});
const calcaler = (valeur) =>{
    if(listekeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent="";
                break;
            case'13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            case '46':
                ecran.textContent= "";
                break;
            case '192':
                ecran.textContent *=0.01;
                break;
        default:
            const indexkeycode = listekeycode.indexOf(valeur);
            const touche = touches[indexkeycode];
            ecran.textContent += touche.innerHTML;
        }
    }
}
window.addEventListener('error',(e) =>{
    alert('il y a une erreur dans votre calcul:'+ e.massage)
    ecran.textContent == alert.innerHTML;
})