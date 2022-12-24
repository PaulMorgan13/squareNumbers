/*insert into "Comics" (name , publisher, "issuesSold "  )  values('batman' ,'dc' , 2000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('Amazing spiderman' ,'marvel' , 1000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('Action comics' ,'dc' , 4000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('Robin' ,'dc' , 1000  );  
insert into "Comics" (name , publisher, "issuesSold "  )  values('green lantern' ,'dc' , 3000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('wonder Woman' ,'dc' , 4000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('x-men' ,'marvel' , 5000  ); 
insert into "Comics" (name , publisher, "issuesSold "  )  values('the tick' ,'new england comics' , 1000  );  */   

insert into "Comics" (name , publisher, "issuesSold ", "dateSold"  )  values('ninja turtles' ,'idw' , 1222 , '2022-11-12' );     



update "Comics"  set "issue#"  = 1  where id = 3;     
update "Comics"  set "issue#"  = 2  where id = 4;    



select * from "Comics" where id < 7 and id > 2;

