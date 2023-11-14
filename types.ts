type UserData = {
    email: string,
    // 0が最初, 1が途中, 2が終了
    state: 0 | 1 | 2,
    data: string,
}

export { UserData }