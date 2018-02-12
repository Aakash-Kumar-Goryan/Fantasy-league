let url1 = "http://cricapi.com/api/"
let key = "CwtRTgGvnsWuMcmrUU6uchP4xT83";
let currMat = [];
let nextMat = [];
$.ajax({
    url : url1 + "matches",
    data : {
        apikey: key
    },
    type : "GET",
    dataType : "json"
})
.done(function (json) {
    let temp = "";
    let date = new Date();
    let currDate = date.getFullYear() + "-" + check(date.getMonth() + 1) + "-" + check(date.getDate());
    for(let i = 0; i < json['matches'].length; i++){
        if(json['matches'][i]['date'].startsWith(currDate)){
            if(json['matches'][i]['matchStarted']){
                currMat.push(json['matches'][i]['unique_id']);
            }else{
                nextMat.push(json['matches'][i]['unique_id']);
            }
            }s
    }
    // display([1134034],currMat);
})
.fail(function(xhr, status){
    alert("oops" + " " + status);
});
// function summary(i, id){
//     $.ajax({
//         url : url1 + "fantasySummary",
//         data : {
//             apikey : key,
//             unique_id : id
//         },
//         type: "GET",
//         dataType: "json"
//     })
//         .done(function(json){
//            console.log("Match " + i);
//            console.log(json);
//         });
// }
function check(x) {
    if(x > 9){
        return x;
    }else{
        return "0" + x;
    }
}
// function display(arr,arr1) {
//     let count = 1;
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<arr1.length;j++)
//         {
//             if(arr[i]==arr1[j])
//             {
//                 summary(count++,arr[i]);
//             }
//         }
//     }
// }
