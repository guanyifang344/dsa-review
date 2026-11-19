const playerKey = 'dsa-dojo-player-v1';
const readPlayer = () => JSON.parse(localStorage.getItem(playerKey) || 'null');
const storePlayer = p => localStorage.setItem(playerKey,JSON.stringify(p));
const validName = value => typeof value === "string" && value.length > 0 && [...value].length <= 20 && !/[\p{Cc}\p{Cf}]/u.test(value);
const rankLock = action => navigator.locks ? navigator.locks.request(playerKey, action) : action();
