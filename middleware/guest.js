export default function ({store,redirect,router}){
  if(store.$auth.loggedIn){
    // store.$auth.logout();
    return redirect('/home/timeline')
  }
}
