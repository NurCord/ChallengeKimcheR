export function SortArrayUp(x, y){
    if (x.name < y.name)return -1;
    if (x.name > y.name)return 1;
    return 0;
}

export function SortArrayDown(x, y){
    if (x.name > y.name)return -1;
    if (x.name < y.name)return 1;
    return 0;
}