var converted;
function bclick(){
    
    if (document.querySelector(".inputText").value.length==0){
        alert("Empty input");
    }
    if (document.querySelector(".inputText").value>999 || document.querySelector(".inputText").value<0){
        document.querySelector(".output").setAttribute("value","out of range");
    }
    else{

        var txt=document.querySelector(".inputText").value;
        var temp=txt;
        var found=0;
        var str='';
        temp=Math.floor(temp);
        ones=temp%10;
        temp/=10;
        temp=Math.floor(temp);
        twos=temp%10;
        temp/=10;
        temp=Math.floor(temp);
        hundreds=temp%10;
        if (hundreds===9){
            str+="Nine hundred";
        }
        else if(hundreds===8){
            str+="Eight hundred";
        }
        else if(hundreds===7){
            str+="seven hundred";
        }else if(hundreds===6){
            str+="six hundred";
        }else if(hundreds===5){
            str+="five hundred";
        }else if(hundreds===4){
            str+="four hundred";
        }else if(hundreds===3){
            str+="three hundred";
        }else if(hundreds===2){
            str+="two hundred";
        }else if(hundreds===1){
            str+="one hundred";
        }

        if(twos===1){
            found=1;

            if (ones===1){
                str+=' eleven';
            }
            else if(ones==0){
                str+=' ten';
            }
            else if(ones===2){
                str+=" twelve"
            }
            else if(ones==3){
                str+=" thirteen";
            }
            else if(ones===4){
                str+=" fourteen";
            }
            else if(ones===5){
                str+=" fifteen";
            }
            else if(ones===6){
                str+=" ixteen";
            }
            else if(ones===7){
                str+=" seventeen";
            }
            else if(ones===8){
                str+=" eighteen";
            }
            else if(ones===9){
                str+=" nineteen";
            }
            

        }
        else if(twos===2){
            str+=" twenty";
            found=1;

        }
        else if(twos===3){
            str+=" thirty";
            found=1;

        }
        else if(twos===4){
            str+=" fourty";
            found=1;

        }
        else if(twos===5){
            str+=" fifty";
            found=1;

        }
        else if(twos===6){
            str+=" sixty";
            found=1;

        }
        else if(twos===7){
            str+=" seventy";
            found=1;

        }
        else if(twos===8){
            str+=" eighty";
            found=1;

        }
        else if(twos===9){
            str+=" ninty";
            found=1;

        }

        if (found===0){
            
            if (ones===1){
                str+=" one";
            }
            else if(ones==0){
                str+=' zero';   
            }
            else if(ones===2){
                str+=' two';
            }
            else if(ones===3){
                str+=' three';
            }

            else if(ones===4){
                str+=' four';
            }
            else if(ones===5){
                str+=' five';
            }
            else if(ones===6){
                str+=' six';
            }
            else if(ones===7){
                str+=' seven';
            }
            else if(ones===8){
                str+=' eight';
            }
            else if(ones===9){
                str+=' nine';
            }
        }






        document.querySelector(".output").setAttribute("value",str);
        
    }
}
