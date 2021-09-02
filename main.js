name_array=[];
function submit(){
    var display_std=[];
    for(var z=1;z<=4;z++){
        var name_student=document.getElementById("name_of_the_student_"+z).value ;
        console.log(name_student);
        name_array.push(name_student);
    }
    console.log (name_array);

    var length=name_array.length;
    console.log (length);

    for(var q=0;q<length;q++){
        display_std.push("<h4>Name- "+name_array[q]+"</h4>");
        console.log (display_std);        
    }
    document.getElementById("display_name_with_commas").innerHTML=display_std;
    

    var remove_commas=display_std.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
   name_array.sort();
   console.log(name_array);
   var std_sort=[];


   var length=name_array.length;
   console.log (length);

   for(var q=0;q<length;q++){
   std_sort.push("<h4>Name- "+name_array[q]+"</h4>");
       console.log (std_sort);     

   }
   var remove_commas=std_sort.join("");
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}