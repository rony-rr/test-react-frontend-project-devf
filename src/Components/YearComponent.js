const YearComponent = () => {
    let d = new Date();
    let year = d.getFullYear();
  
    return <span>By DEV.F {year}</span>;
}
  
export default YearComponent;