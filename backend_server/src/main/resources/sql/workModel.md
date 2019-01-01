selectAll
===
```sql
SELECT
	*
FROM
	work
	order by votes desc
```



selectRankingList
===
```sql
select
    @pageTag(){
      *
    @}
FROM 
    work
    order by votes desc 
```
selectWorkList
===
```sql
select
    @pageTag(){
      *
    @}
FROM 
    work
```


selectByIdOrTitle
===
```sql
SELECT
	@pageTag(){
      *
    @} 
FROM
	`work` 
WHERE
    number LIKE #'%'+search+'%'#
    OR title LIKE #'%'+search+'%'#
```

selectByClassify
===
```sql
SELECT
	@pageTag(){
      *
    @}  
FROM
	`work` 
WHERE classify = #classify#
	
```

updateVotes
===
```sql
update 
  `work` 
set 
  votes = #votes#  
where id=#id#;
```