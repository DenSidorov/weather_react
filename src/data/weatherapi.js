import axios from 'axios';

// Созаём константы базового адреса и ключа
// 1 вариант по координатам
// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
// 2 вариант по названию города
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?&lang=ru&units=metric&exclude=daily&';
const apiKey = 'd4ca72817b690ef4d7c44fcc83eb9cb6';

export const getWeatherData = async (city) => {
    try {
        // Получаем координаты
        // let coords = [];
        // navigator.geolocation.getCurrentPosition((position) => {
        //     const lat = position.coords.latitude.toFixed(3);
        //     const lon = position.coords.longitude.toFixed(3);
        //     coords.push(lat, lon)
            // console.log(coords);
        // });
        // Запрос по координатам местоположения
        // const {data} = await axios.get(baseUrl + `lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}`);
        // Запрос по названию горда
        const {data} = await axios.get(baseUrl + `q=${city}&appid=${apiKey}`);
        // console.log(data);
        return data;
    } catch (error) {
        throw error;
    };
};