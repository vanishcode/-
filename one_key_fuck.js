/**
 * @desc 在题目内部，开发人员工具，终端，复制粘贴进去，回车
 * @author vanishcode@gmail.com
 */

let answer_hash = {
    'e7a70fa81a5935b71a5935b7': 'A',
    'fe57bcca6101409561014095': 'B',
    '0cad1d412f80b84d2f80b84d': 'C',
    'f30e62bbd73d6df5d73d6df5': 'D'
}
let answer_list = []
let question_list = []
for (let i = 0; i < 12; i++) {
    answer_list.push(answer_hash[document.querySelector(`[name=kg_answer${i+1}]`).value])
    question_list.push(document.querySelectorAll(`[name=kg${i+1}]`))
    if (answer_list[i] == 'A') {
        question_list[i][0].checked = true
        continue
    } else if (answer_list[i] == 'B') {
        question_list[i][1].checked = true
        continue
    } else if (answer_list[i] == 'C') {
        question_list[i][2].checked = true
        continue
    } else if (answer_list[i] == 'D') {
        question_list[i][3].checked = true
        continue
    }
}
document.querySelector('input[type=submit]').click()