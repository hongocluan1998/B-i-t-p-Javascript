## F12 -> fake data :

```javascript
for(var i = 0; i < 10; i++){
    var sv = SV.create(SV.getNewIndex(), getUniqueString(), 'Trần Phú Quy', 'Nam', 'CNTT', '18/02/1998', getRandomInt(1, 10));
    SV.add(sv); 
}
```

## Xóa mọi dữ liệu trong localStorage 

```javascript
SV.clearAll();
```

**index.js**: Mã nguồn danh sách sinh viên

**index2.js**: Mã nguồn chi tiết sinh viên

**sv-index.html**: Page danh sách sinh viên

**show-sv.html**: Page chi tiết sinh viên

**DeBai.txt**: Đề bài
