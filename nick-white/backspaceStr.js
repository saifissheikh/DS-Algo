function strCompare(s, t) {
    let spointer = s.length - 1;
    let tpointer = t.length - 1;
    let sskips = 0;
    let tskips = 0;
    while(spointer >= 0 || tpointer >= 0) {
        while(spointer >= 0) {
            if(s[spointer] === '#') {
                sskips++;
                spointer--;
            }
            else if(sskips > 0) {
                spointer--;
                sskips--;
            } else break;
        }

        while(tpointer >= 0) {
            if(t[tpointer] === '#') {
                tskips++;
                tpointer--;
            }
            else if(tskips > 0) {
                tpointer--;
                tskips--;
            } else break;
        }

        if(spointer >= 0 && tpointer >= 0 && s[spointer] !== t[tpointer])
            return false;
        if(spointer !== tpointer) return false;
    }
    return true;
}