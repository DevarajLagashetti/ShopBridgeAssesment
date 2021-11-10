// ********* validate email id 

function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}

function ValidateEmail(txt){
	var emailID=txt;
	
	if ((emailID.value==null)||(emailID.value=="")){
		
		return true;
	}
	if (echeck(emailID.value)==false){		
		emailID.focus()
		return false
	}
	return true
 }
 
 ////////////////////end of  email validation  ////////////

 ////////////////////// allow only number /////////////////

 function OnlyIntegers()
 //onkeypress="javascript:return OnlyIntegers();"
 {
     var Val = event.keyCode;
     if (Val >= 46 && Val < 58) {
         event.returnValue = true
     }
     else {
         event.returnValue = false
     }
 }


 function OnlyNumber(evt) {
     var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         return false;
     } else {

         return true;
     }
 }
 function RestrictSpace() {
     if (event.keyCode == 32) {
         return false;
     }
 }
 				

 //////////////////////End allow only number /////////////////





function test()
{
alert('test');
return true;
}
function alterHdfFullHalf(cmbFullHalf,hdfLoad)
{
     //  alert(name.substr(0,2) + 'z' + name.substr(2+1));

  if(hdfLoad.value =='')
  { 
    alert('select Days and then continue');
    cmbFullHalf.selectedIndex =0;
    return false;
  }
  if(cmbFullHalf.selectedIndex ==0)
  { 
   
       hdfLoad.value = hdfLoad.value.substr(0,5) + cmbFullHalf.selectedIndex + hdfLoad.value.substr(5+1) ; 
       hdfLoad.value = hdfLoad.value.substr(0,4) + '1' + hdfLoad.value.substr(4+1) ;       
    return false;
  } 
    
   hdfLoad.value = hdfLoad.value.substr(0,5) + cmbFullHalf.selectedIndex + hdfLoad.value.substr(5+1) ; 
   hdfLoad.value = hdfLoad.value.substr(0,4) + '1' + hdfLoad.value.substr(4+1) ;    
   return false;
}




//********** End of Scripts For frmGrantLeave ************************/////////////

function  validatetime(txtTime)
{
 if(txtTime.value.length==0 )
 {
 return true;
 }
  var strval = txtTime.value;
  var strval1;
    
  //minimum lenght is 6. example 1:2 AM
  if(strval.length < 6)
  {
   alert("Invalid time. Time format should be HH:MM AM/PM.");
   txtTime.focus();
   return false;
  }
  
  //Maximum length is 8. example 10:45 AM
  if(strval.lenght > 8)
  {
   alert("invalid time. Time format should be HH:MM AM/PM.");   
   txtTime.focus();
   return false;
  }
  
  //Removing all space
  strval = trimAllSpace(strval); 
  
  //Checking AM/PM
  if(strval.charAt(strval.length - 1) != "M" && strval.charAt(
      strval.length - 1) != "m")
  {
   alert("Invalid time. Time shoule be end with AM or PM.");
   txtTime.focus();
   return false;
   
  }
  else if(strval.charAt(strval.length - 2) != 'A' && strval.charAt(
      strval.length - 2) != 'a' && strval.charAt(
      strval.length - 2) != 'p' && strval.charAt(strval.length - 2) != 'P')
  {
   alert("Invalid time. Time shoule be end with AM or PM.");
   txtTime.focus();
   return false;
   
  }
  
  //Give one space before AM/PM
  
  strval1 =  strval.substring(0,strval.length - 2);
  strval1 = strval1 + ' ' + strval.substring(strval.length - 2,strval.length)
  
  strval = strval1;
      
  var pos1 = strval.indexOf(':');
  txtTime.value = strval;
  
  if(pos1 < 0 )
  {
   alert("invlalid time. A color(:) is missing between hour and minute.");
   txtTime.focus();
   return false;
  }
  else if(pos1 > 2 || pos1 < 1)
  {
   alert("invalid time. Time format should be HH:MM AM/PM.");
   txtTime.focus();
   return false;
  }
  
  //Checking hours
  var horval =  trimString(strval.substring(0,pos1));
   
  if(horval == -100)
  {
   alert("Invalid time. Hour should contain only integer value (0-11).");
   txtTime.focus();
   return false;
  }
      
  if(horval > 12)
  {
   alert("invalid time. Hour can not be greater that 12.");
   txtTime.focus();
   return false;
  }
  else if(horval < 0)
  {
   alert("Invalid time. Hour can not be hours less than 0.");
   return false;
  }
  //Completes checking hours.
  
  //Checking minutes.
  var minval =  trimString(strval.substring(pos1+1,pos1 + 3));
  
  if(minval == -100)
  {
   alert("Invalid time. Minute should have only integer value (0-59).");
   txtTime.focus();
   return false;
  }
    
  if(minval > 59)
  {
     alert("Invalid time. Minute can not be more than 59.");
     txtTime.focus();
     return false;
  }   
  else if(minval < 0)
  {
   alert("Invalid time. Minute can not be less than 0.");
   txtTime.focus();
   return false;
  }
   
  //Checking minutes completed.
  
  //Checking one space after the mintues 
  minpos = pos1 + minval.length + 1;
  if(strval.charAt(minpos) != ' ')
  {
   alert("Invalid time. Space missing after minute Time should have HH:MM AM/PM format.");
   txtTime.focus();
   return false;
  }
 
  return true;
}

function trimAllSpace(str) 
{ 
    var str1 = ''; 
    var i = 0; 
    while(i != str.length) 
    { 
        if(str.charAt(i) != ' ') 
            str1 = str1 + str.charAt(i); i ++; 
    } 
    return str1; 
}


function trimString(str) 
{ 
     var str1 = ''; 
     var i = 0; 
     while ( i != str.length) 
     { 
         if(str.charAt(i) != ' ') str1 = str1 + str.charAt(i); i++; 
     }
     var retval = IsNumeric(str1); 
     if(retval == false) 
         return -100; 
     else 
         return str1; 
}

function IsNumeric(strString) 
{ 
    var strValidChars = "0123456789"; 
    var strChar; 
    var blnResult = true; 
    //var strSequence = document.frmQuestionDetail.txtSequence.value; 
    //test strString consists of valid characters listed above 
    if (strString.length == 0) 
        return false; 
    for (i = 0; i < strString.length && blnResult == true; i++) 
    { 
        strChar = strString.charAt(i); 
        if (strValidChars.indexOf(strChar) == -1) 
        { 
            blnResult = false; 
        } 
     }
     return blnResult; 
}




/// ************ end VAlidate time ***********////////////

var newwindow;
function GetRowValue(val)

{

    // hardcoded value used to minimize the code. 

    // ControlID can instead be passed as query string to the popup window
    
    window.opener.document.getElementById(get_query_string(parent.document.URL,'tb')).value = val; 
    window.opener.document.getElementById(get_query_string(parent.document.URL,'btn')).click();
    window.close();
}


function loadSearch(lblID,str,grdID,hfield)
{
    var grid = document.getElementById(grdID);
    var labtxt =  document.getElementById(lblID);
    if(grid.rows.length > 0)
    {    
    labtxt.innerHTML = 'Search By :' + str;	
    hfield.value = str;        
    }
    else
    {
    alert('No Items found To search for');
    }
    return false;
    
}

// ********** function to prompt/validate mandatory fields for employee save and update condition ********/////////

  function Savevalidate_Employee(lstLeave,lstFinger,cmbShiftType)
    {    
     if(cmbShiftType.selectedIndex==0)
     {
       alert('Select the shift Type');
       cmbShiftType.focus();
       return false;
     }
     var lstlv = lstLeave;
     var lstfi = lstFinger;
     if(lstlv.options.length == 0 ||lstfi.options.length == 0 )
     {
     result = confirm('Leave/Finger Details not entered would u like to continue??');
     if(result == false)
        {
          return false;
        }
     }
      
    }

// ********** End of function to prompt/validate mandatory fields for employee save and update condition ********/////////
// ******* function to load shift times as per drop down change *****************///

function load_shift(drp,txtFrom,txtTo,hdfDetails)
{
    var dd = drp;
    if(dd.selectedIndex==0)
    {
    txtFrom.innerText = '-';
    txtTo.innerText ='-';
    hdfDetails.value ='';
    return false;
    }
    txtFrom.innerText = dd.options[dd.selectedIndex].value.split('-')[1];
    txtTo.innerText = dd.options[dd.selectedIndex].value.split('-')[2];
    hdfDetails.value = dd.options[dd.selectedIndex].value;    
    return false;
}



// ****   function to load leave lists ********////////////
function listItemLeave(listBox,drpitem,txtQuota,hdfLeave)
   {
     if(drpitem.selectedIndex==0 ||txtQuota.value.length==0)
        {
           alert('Enter both leavetype and quota to add');
           return false;
        }
      if (txtQuota.value % 0.5 != 0)
        {
            alert('Invalid Number of Leaves');
            return false;
        } 
    
   var lst = listBox;
   var quota = txtQuota.value;
   var drpValue = drpitem.value;
   if(lst.options.length == 0)
   {
      addItem(lst,drpValue+'-'+quota,drpValue+'-'+quota)
      hdfLeave.value = drpValue+'-'+quota+'&'; 
      return false;
   
   }
  for(var i = 0; i < lst.options.length; ++i)
    {
      if(lst.options[i].text.split('-')[0] == drpitem.options[drpitem.selectedIndex].text)
        {
            alert(drpitem.options[drpitem.selectedIndex].text +' Leave type already present!');
            return false;
//list.options[i].value
        }
     }
   addItem(lst,drpValue+'-'+quota,drpValue+'-'+quota)  
   hdfLeave.value='';
   for(var j = 0; j < lst.options.length; ++j)
    {
    hdfLeave.value = hdfLeave.value + lst.options[j].text +'&';  
    } 
    return false;
      
}

// function to remove list items //

function RemoveListItems(lstBx,hdf)
{
   var lstBox = lstBx;
   var count = lstBox.options.length;
   if(lstBox.options.length ==0)
   {
    alert('No Items To Remove');
    return false;
   }
   for(var k=0;k<lstBox.options.length;++k)
   {
    if(lstBox.options[k].selected == true)
       {
         lstBox.remove(k);         
       } 
   }
   if(count == lstBox.options.length)
   {
    alert('Please Select an item to remove');
    return false;
   }
   if(lstBox.options.length==0)
   {   
   hdf.value='';
   return false;
   }
   hdf.value='';
   for(var p=0;p<lstBox.options.length;++p)
   {
   hdf.value = hdf.value + lstBox.options[p].value +'&';  
   }
   return false;
}


// **** //// function to remove items in leave quota  based on several condition like is updatable ** //

function RemoveListItemsLeave(lstBx,hdf,cmdSave)
{
  var lstBox = lstBx;
   if(cmdSave.value.toUpperCase() != 'SAVE')
   {
      for(var m=0;m<lstBox.options.length;++m)
      {
          if(lstBox.options[m].selected == true && lstBox.options[m].text != lstBox.options[m].value && lstBox.options[m].value.toUpperCase()=='FALSE')
          {
            alert('Cannot update/Remove and established Record');
            return false;
          }  
      }
   }
  
   var count = lstBox.options.length;
   if(lstBox.options.length ==0)
   {
    alert('No Items To Remove');
    return false;
   }
   for(var k=0;k<lstBox.options.length;++k)
   {
    if(lstBox.options[k].selected == true)
       {
         lstBox.remove(k);         
       } 
   }
   if(count == lstBox.options.length)
   {
    alert('Please Select an item to remove');
    return false;
   }
   if(lstBox.options.length==0)
   {   
   hdf.value='';
   return false;
   }
   hdf.value='';
   for(var p=0;p<lstBox.options.length;++p)
   {
   hdf.value = hdf.value + lstBox.options[p].text +'&';  
   }
   return false;
}




// ************************ END *******************************////
/// function to read/load items in listbox //


function ListItemsFinger(listBoxVal,drp1,drp2,hdfFinger)
{

if(drp1.selectedIndex==0 || drp2.selectedIndex==0)
{
alert('Select both the Combination');
return false;
}
var drpValue1 = drp1.value;
var drpValue2 = drp2.value;
var list = listBoxVal;
if(list.options.length == 0)
{
addItem(list,drpValue1+'-'+drpValue2,drpValue1+'-'+drpValue2)
hdfFinger.value = drpValue1+'-'+drpValue2+'&'; 
return false;
}
for(var i = 0; i < list.options.length; ++i)
{
if(list.options[i].text == drpValue1+'-'+drpValue2)
{
alert(drpValue1+'-'+drpValue2+' Combination already present!');
return false;
//list.options[i].value
}
}
addItem(list,drpValue1+'-'+drpValue2,drpValue1+'-'+drpValue2)
hdfFinger.value='';
for(var j = 0; j < list.options.length; ++j)
{
hdfFinger.value = hdfFinger.value + list.options[j].value +'&';  
}

return false;

}

function addItem(selectbox,text,value )
{
var optn = document.createElement("OPTION");
optn.text = text;
optn.value = value;
selectbox.options.add(optn);
}
///////      function to validate date //////////////

// Declaring valid date character, minimum year and maximum year
var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strMonth = dtStr.substring(pos1 + 1, pos2)
	var strDay=dtStr.substring(0,pos1)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : dd/mm/yyyy")		
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")		
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")		
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		datevar.focus();
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")		
		return false
	}
return true
}

  function ValidateDate(datevar){
    if(datevar.value.length ==0)
   {
      return true;
   }
	var dt=datevar
	if (isDate(dt.value)==false){
		dt.focus()
		return false
	}
    return true
 }


 /// *** End of date function mm/dd/yyyy *******//

function RfvBoth(txtBox1,txtBox2)
{
     if(txtBox1.value.length==0 && txtBox2.value.length==0)
      {
           alert('Please Enter Either Name/Id Fields to make a search');
           return false;  
      }
       else
       {
         return true;
       }
}

// to check if combo is not set to default value -Select-
function RfvFor2Combo(cmbDays,cmbDayAS)
{
if(cmbDays.selectedIndex==0 || cmbDayAS.selectedIndex==0)
{
alert('Please Select the mandatory Fields');
return false;  
}
}

// Required Field Validator for 3 Mandatory Fields with Time Validation
function RfvFor3FieldWithTime(txtBox1,txtBox2,txtBox3)
{
      if(txtBox1.value.length==0 || txtBox2.value.length==0)
         {
           alert('Please Enter the mandatory Fields');
            return false;  
         }
       if(validatetime(txtBox2)==false)
        {
            return false;
        }
       if(txtBox3.value.length!=0)
        {
            if(validatetime(txtBox3)==true)
                {
                     return true;
                }
            else
                {
                     return false;
                }
         }
}

//Required Field Validator for 2 Mandatory Fields with Date Validation
function RfvFor2FieldWithDate(txtBox1,txtBox2)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
}

if(ValidateDate(txtBox2)==true)
{
  return true;
}


}

//Required Field Validator for 3 Mandatory Fields with Date Validation
function RfvFor3FieldWithDate(txtBox1,txtBox2,txtBox3)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
}

if(ValidateDate(txtBox2)==false)
{
  return false;
}
if(txtBox3.value.length!=0)
{
if(ValidateDate(txtBox3)==true)
{
  return true;
}
else
{
 return false;
}
}
}
//Required Field validator for Single Mandatory Fields
function RfvFor1Field(txtBox,display)
{

if(txtBox.value.length==0)
{
alert('Please Enter the '+ display);
return false;  
} 
return true;
}

//Required Field Validator for 2 Mandatory Fields
function RfvFor2Field(txtBox1,txtBox2)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
else
{
return true;
}
}

//Required Field Validator for 3 Mandatory Fields
function RfvFor3Field(txtBox1,txtBox2,txtBox3)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

//Required Field Validator for 4 Mandatory Fields
function RfvFor4Field(txtBox1,txtBox2,txtBox3)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0 || txtBox4.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

//Required Field Validator for 5 Mandatory Fields
function RfvFor5Field(txtBox1,txtBox2,txtBox3,txtBox4,txtBox5)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0 || txtBox4.value.length==0 || txtBox5.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

//Required Field Validator for 5 Mandatory Fields plus 1 Combo
function RfvFor5Field1Combo(txtBox1,txtBox2,txtBox3,txtBox4,txtBox5,combo1)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0 || txtBox4.value.length==0 || txtBox5.value.length==0 ||combo1.selectedIndex==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

//Required Field Validator for 4 Mandatory Fields plus 1 Combo
function RfvFor4Field1Combo(txtBox1,txtBox2,txtBox3,txtBox4,combo1)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0 || txtBox4.value.length==0 ||combo1.selectedIndex==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

//Required Field Validator for 6 Mandatory Fields
function RfvFor6Field(txtBox1,txtBox2,txtBox3,txtBox4,txtBox5,txtBox6)
{
if(txtBox1.value.length==0 || txtBox2.value.length==0 || txtBox3.value.length==0 || txtBox4.value.length==0 || txtBox5.value.length==0 || txtBox6.value.length==0)
{
alert('Please Enter the mandatory Fields');
return false;  
} 
return true;
}

// function to chk status of check box for user access (chk = checkboxid, oldval= hiddenvariable/old status
function  fuc(chk,oldval)
{
var chkList1=chk;
var status;
var chkExtreme="";
var chkLow=""; 
var present ="";
var arrayOfCheckBoxes=chkList1.getElementsByTagName("input"); 
var result ;
for(var i=0;i<arrayOfCheckBoxes.length;i++)
{
status=arrayOfCheckBoxes[i].checked;
if(arrayOfCheckBoxes[i].checked==true)
{
present=present + 1;
}
else
{
present=present + 0;
}
}
if(present==oldval.value)
{
alert('No changes Made')
return false;
}

// To no. of 1's or 0's based on the length of the check box or strings passed both being same
for(var j=0;j<oldval.value.length;j++)
{
chkExtreme = chkExtreme + 1;
chkLow = chkLow + 0;
}

if(present== chkExtreme)
{
result = confirm('Are you Sure you want to Give Complete Access');
if(result == true)
{
return true;
} 
else
{
return false;
}

}
if(present==chkLow)
{
result = confirm('Are you Sure you want to Remove Complete Access');
if(result == true)
{
return true;
} 
else
{
return false;
}
}
 }
 
// function to test time if it is valid using maskededitor control in ajax having format 99:99
function TestTime(test)
{
var hrs = test.value.substring(2,0); 
var min = test.value.substring(3,5);
if(hrs <1 || hrs > 12)
{
alert('Invalid Time Format');
test.focus();
return false;
}
if(min >59)
{
alert('Invalid Time Format');
test.focus();
return false;
}
return;
}


function get_query_string(qry,key)
{
    var pos=qry.indexOf(key + '=');
    pos=pos+key.length+1;
    //var parms=qry.substring(pos,qry.length-pos+1);
    var parms=qry.substring(pos,qry.length);
    return(parms.split('&')[0]);
}

function get_message()
{
//var result == confirm('test');
var result = confirm('Are you Sure you want to continue cancelling?');
if(result == true)
{
return true;
} 
else
{
return false;
}
//if result == true
//{
//alert('true');
//}
}
/// test delete lates
function check_check(checkb)
{  
   alert(checkb.value);
} 

function get_Prompt(news,indexv)
{
//var result == confirm('test');
if(indexv=='-Select User-')
{
alert('test');
return false;
}

if(news=='1111')
{
var result = confirm('Are you Sure you want to Give Complete Access');
if(result == true)
{
return true;
} 
else
{
return false;
}
}
if(news=='0000')
{
var result = confirm('Are you Sure you want to Remove Complete Acess');
if(result == true)
{
return true;
} 
else
{
return false;
}
}
//if result == true
//{
//alert('true');
//}
}


function get_PromptMessage(newStatus,oldStatus,disp)
{
if(oldStatus.value==newStatus.value)
{
alert('No Changes Made To Save');
disp.value=oldStatus.value*1;
disp.focus();
 return true;// break - 2 ,save-1;
}
//if(newStatus="0000")
//{
//var result = confirm('Are you Sure you want to Discard all Privileges');
//if(result == true)
//{
//disp.value='1';
//disp.focus();
// return true;
//} 
//else
//{
//disp.value='2';
//disp.focus();
// return true;
//}
//}
//if(oldStatus!=newStatus)
//{
//disp.value='1';
//disp.focus();
// return true;
//}

}

function AllowNumber(field, evt)
        {
            var charCode = (evt.which) ? evt.which : event.keyCode
            var keychar = String.fromCharCode(charCode);

            if (charCode > 31 && (charCode < 48 || charCode > 57) && keychar != "."  && keychar != "-" )
            {
                return false;
            }

            if (keychar == "." && field.value.indexOf(".") != -1) 
            {
                return false;
            }
                
            if(keychar == "-")
            {
                if (field.value.indexOf("-") != -1 /* || field.value[0] == "-" */) 
                {
                    return false;
                }
                else
                {
                    //save caret position
                    var caretPos = getCaretPosition(field);
                    if(caretPos != 0)
                    {
                        return false;
                    }
                }
            }

            return true;
        }
        
    function getCaretPosition(objTextBox)
    {

            var objTextBox = window.event.srcElement;

            var i = objTextBox.value.length;

            if (objTextBox.createTextRange){
                objCaret = document.selection.createRange().duplicate();
                while (objCaret.parentElement()==objTextBox &&
                  objCaret.move("character",1)==1) --i;
            }
            return i;
    }
    function AllowOnlyChar(evt) {

        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
           
            return true;
        }
        return false;
    }

//isIE=document.all? 1:0
//	keyEntry = !isIE? e.which:event.keyCode;
//	if(((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')) || (keyEntry=='46') || (keyEntry=='32') || keyEntry=='45' ) 
//		return true;  
//	else
//		return false;
//		}

function AllowChar(field, evt)
        {
            // this function will not allow "'" as it will give error in the insert query.
            var charCode = (evt.which) ? evt.which : event.keyCode
            var keychar = String.fromCharCode(charCode);

           
            if (keychar == "'") 
            {
                return false;           
            }
            return true;
}

function AllowAlphaWithSingleSpace(evt,textvalue) {
    //debugger;
    // alert();
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
   ((evt.which) ? evt.which : 0));

    var len = textvalue.value.length;
    var index = textvalue.value.indexOf(' ');
    //    alert(charCode);
    if (len == 0 && charCode == 32) {
        return false;
    }

    if (len > 30) {
        return false;
    }

    if (index > 0 && charCode == 32) {
        return false;
    }

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32)

        return true;
    else
        return false;
}
    function ValidateAlpha(evt) {
        var keyCode = (evt.which) ? evt.which : evt.keyCode
        if (event.keyCode == 8 || event.keyCode == 46
 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
            return false;
        }
        else
            return true;
                }

 function OpenWindow(Url,hgt,width,textbox)
    {
        if(textbox.value.length>0)
        {
            return true;
        }
        else
        {
            newwindow=window.open(Url,'Print','addressbar=no, scrollbars =yes, resizable=no,top = 100, left = 100,  height='+ hgt + ', width='+ width);
            if (window.focus) {newwindow.focus()}
            return false;
        }
     
    }
    function OpenWindowItem(Url)
    {   
            newwindow=window.open(Url,'Print','addressbar=no, scrollbars =yes, resizable=no,top = 60, left = 50,  height=700, width=650');
            if (window.focus) {newwindow.focus()}
            return true;                        
   }      

  //This function will pop up the window for selecting tem slno
  function PopUpItemSlnoPage(IssuedQty,slFlag,ItemCode,SlNoTextBox)
  {
        if(slFlag*1==0)
        {
            return false;
        }
  
        if(SlNoTextBox.value.length>0)
        {
            //check the qty in the slno text box matches with current qty
            var TempQty=SlNoTextBox.value.split('&')[0]*1;
            if(TempQty!=IssuedQty*1)
            {
                SlNoTextBox.value="";
            }
            else
            {
                //qty is same hence no need to select slno again
                return false;
            }
        }
         if(SlNoTextBox.value.length==0)
        {
            //sl no required hence pop up window to select slno
            // do not leave from qty text box
            
            var url="ItemSlnoSelect.aspx?ItemCode="+ItemCode+"&Qty="+IssuedQty+"&SlnoTextId="+SlNoTextBox.id;
            
            newwindow=window.open(url,'Print','addressbar=no, scrollbars =yes, resizable=no,top = 100, left = 100,  height=500, width=800');
            if (window.focus) {newwindow.focus()}
            return true; //need to enter slno hence do not leave from qty text box
            
        }
        
  }
  
  
  function check_stock(item,stock,total,price)
  {
 if(item.value*1>=stock.value*1)
 {
 alert('Attention!!! Quantity is greater/equal to stock');
  }
  total.value=(item.value*1)*(price.value*1);
  total.focus();
 return true;
 
  }

  
  // return invoice to return current total and quantity

function GridCurrent(rqty,aqty,aprice,cqty,cprice)
    {
    
       if(rqty.value *1 > aqty*1)
       {
        alert('Return Quantity should be less than Indent quantity');
        rqty.focus();
        return false;
       }
        else
        {
        cqty.value = aqty - rqty.value*1;
        cprice.value  = aprice * (cqty.value*1);
        return true;
        }        
    }
 
 
 // outwards to get grid total
 
  function GridItemTotal(qty,price,total,grid,totTextBox,LastColCount,IndentQty,IssuedQty,Stock,slFlag,ItemCode,SlNoTextBox)
    {
        if(qty.value*1>(IndentQty-IssuedQty))
        {
            alert('Current Quantity should be less than or equal to ' + (IndentQty-IssuedQty));
            qty.value=(IndentQty-IssuedQty);
            qty.focus();
            return false;
        }
        if(qty.value*1>Stock )
        {
            alert('Current Quantity should be less than or equal to ' + Stock);
            qty.value=Stock;
            qty.focus();
            return false;
        }
        
        total.value=price*qty.value;
        GridGrandTotal(grid,totTextBox,LastColCount);
                
        //check if sl no required 
        var blnResult=PopUpItemSlnoPage(qty.value,slFlag,ItemCode,SlNoTextBox);
        
        if(blnResult==true)
        {
            //sl no required, hence stop the control in the qty textbox only..
            //qty.focus();
            newwindow.focus();
            newwindow.moveTo(110,110);
            return false;            
        }
        else
        {
            //slno is not required or entered
            return true;
        }
        
    }
    
    // Inwards to return total quantity and total price
    
    function GridInwardsTotal(qty,price,totAmt,slFlag,ItemCode,SlNoTextBox)
    {
        
       if(qty.value=="" || qty.value*1==0)
       {
        qty.value=0;        
        totAmt.value= (qty.value*1)* (price);
       return true;
       }
       else
    {     
    totAmt.value= (qty.value*1)* (price);
     }
     var blnResult=PopUpItemSlnoPage(qty.value,slFlag,ItemCode,SlNoTextBox);
     }
   
 
  
    function GridGrandTotal(grid,totTextBox,LastColCount)
        {
            //get reference of GridView control
            //var grid = document.getElementById("<%= GridView1.ClientID %>");
            //variable to contain the cell of the grid
            //LastCellNo is the last col no in the
            var cell;
            totTextBox.value=0;
            if (grid.rows.length > 0)
            {
                //loop starts from 1. rows[0] points to the header.
                for (i=1; i<grid.rows.length; i++)
                {
                    //get the reference of first column
                    cell = grid.rows[i].cells[LastColCount];
                    
                    //loop according to the number of childNodes in the cell
                    for (j=0; j<cell.childNodes.length; j++)
                    {           
                        //if childNode type is CheckBox                 
                        if (cell.childNodes[j].type =="text")
                        {
                        //assign the status of the Select All checkbox to the cell checkbox within the grid
                           totTextBox.value= totTextBox.value*1 + cell.childNodes[j].value*1;
                        }
                    }
                }
            }
           
        }
        function AllowCharNum1(evt) {
           evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
           ((evt.which) ? evt.which : 0));

            if (charCode > 31 && (charCode >= 48 && charCode <= 57) ||
                (charCode > 64 && charCode < 91) ||
                (charCode == 46) ||
                (charCode == 8) ||
                (charCode > 96 && charCode < 123)) {
                return true;
            }
            if (charCode == 9) { return true; }
            else { return false; }
        }


        function AllowCharNum(evt) {
            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
           ((evt.which) ? evt.which : 0));
            if (charCode == 31) { return true; }
            if (charCode > 33 && (charCode >= 48 && charCode <= 57) ||
                (charCode > 64 && charCode < 91) ||
                (charCode == 46) || (charCode == 45) ||
                (charCode == 8) ||
                (charCode > 96 && charCode < 123)) {
                return true;
            }
            if (charCode == 9) { return true; }
             
            else { return false; }
        }

        function AllowOnlyCharNotAllowSpecial(evt) {
            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
           ((evt.which) ? evt.which : 0));

            if (charCode > 31 && (charCode < 48 && charCode > 57) ||
                (charCode > 64 && charCode < 91) ||
                (charCode == 46) ||
                (charCode == 8) ||
                (charCode > 96 && charCode < 123)) {
                return true;
            }
            if (charCode == 9) { return true; }
           else if (charCode == 32) { return true; }
            else { return false; }
        }

        ///////////////////// Validating limit in textarea(multiline) //////////////////

        function ValidateTextlimit(obj, maxchar) {

            if (this.id) obj = this;

            var remaningChar = maxchar - obj.value.length;


            if (remaningChar <= 0) {
                obj.value = obj.value.substring(maxchar, 0);

                return false;

            }
            else
            { return true; }
        }

     

        function OnlyNumberHyphen(field, evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode != 46 && charCode != 45 && charCode > 31
                 && (charCode < 48 || charCode > 57))
                return false;
            else {

                return true;
            }
        }

        function RestrictSpace( evt) {
            if (event.keyCode == 32) {
                return false;
            }
        }
       