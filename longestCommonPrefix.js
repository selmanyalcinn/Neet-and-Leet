let prefix = ""

var longestCommonPrefix = function (strs) {
    if (strs.length == 3) {
        let first = strs[0].split("")
        let second = strs[1].split("")
        let third = strs[2].split("")
        for (let i = 0; i <= first.length; i++) {
            if (first.slice(0, i).join("") == second.slice(0, i).join("") && first.slice(0, i).join("") == third.slice(0, i).join("")) {
                prefix = first.slice(0, i).join("")
            }
        }
        return prefix
    } else {
        if (strs.length == 0) {
            return ""
        }
        if (strs.length == 1) {
            return strs[0]
        }
        if (strs.length == 2) {
            let first = strs[0].split("")
            let second = strs[1].split("")
            for (let i = 0; i <= first.length; i++) {
                console.log(i)
                console.log(first.slice(0, i).join(""))
                if (first.slice(0, i).join("") == second.slice(0, i).join("")) {
                    prefix = first.slice(0, i).join("")
                }
            }
            return prefix
        }
        if (strs.length == 4) {
            let first = strs[0].split("")
            let second = strs[1].split("")
            let third = strs[2].split("")
            let fourth = strs[3].split("")
            for (let i = 0; i <= first.length; i++) {
                if (first.slice(0, i).join("") == second.slice(0, i).join("") && first.slice(0, i).join("") == third.slice(0, i).join("") && first.slice(0, i).join("") == fourth.slice(0, i).join("")) {
                    prefix = first.slice(0, i).join("")
                }
            }
            return prefix
        }
        if (strs.length == 5) {
            let first = strs[0].split("")
            let second = strs[1].split("")
            let third = strs[2].split("")
            let fourth = strs[3].split("")
            let fifth = strs[4].split("")
            for (let i = 0; i <= first.length; i++) {
                if (first.slice(0, i).join("") == second.slice(0, i).join("") && first.slice(0, i).join("") == third.slice(0, i).join("") && first.slice(0, i).join("") == fourth.slice(0, i).join("") && fifth.slice(0, i).join("") == fourth.slice(0, i).join("")) {
                    prefix = first.slice(0, i).join("")
                }
            }
            return prefix
        } if (strs.length > 5) {
            var shortest = strs.sort(
                function (a, b) {
                    return a.length - b.length;
                }
            )[0];
            for (let x = 0; x <= shortest.length; x++) {
                for (let i = 1; i < strs.length; i++) {
                    if (shortest.split("").slice(0, x).join("") == strs[i].split("").slice(0, x).join("")) {
                        prefix = shortest.split("").slice(0, x).join("")
                    }
                }
            }
            return prefix
        }
    }
}