const Favorite = ()=>{
    const favouriteList = localStorage.getItem('favoriteCountry')
    const result = favouriteList ? JSON.parse(favouriteList): undefined
    console.log(result)

    // if(name)return, 
    return (
        <h1>fav</h1>
    )}

    export default Favorite