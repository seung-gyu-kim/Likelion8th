# Github Command

### Push to empty repository

```bash
git init
git remote add origin 레포지토리 주소
git add .
git commit -m "(원하는 내용)"
git push origin master
```

### Push to exist repository

```bash
git clone 레포지토리 주소
git add .
git commit -m "(원하는 내용)"
git push origin master
# [fetch, pull 필요할 경우 Pull from exist repository 참고]
```

### Pull from exist repository

```bash
git fetch
git pull
# [충돌 발생 시 충돌 해결]
```

### 연결된 이후 push

```bash
# fetch, pull, merge 등 수행
git commit -m "(원하는 내용)"
git push origin master
```

### 자주 쓰는 명령어

- git init
- git add .
- git commit -m "content"
- git remote add orgint http://주소.git
- git branch 브랜치명
- git checkout 브랜치명
- git push origin 브랜치
- git pull origin 브랜치
- git clone http://주소.git
- git status