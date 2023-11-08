export const isActive=(name: string)=>{
if(name === "logowanie"){
    return true
} else{
    return false
}
}

export const isError = (err: boolean, color: string) => {
  if (!err) {
    return "red";
  } else {
    return color;
  }
};