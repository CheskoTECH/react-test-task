function getRand(arr) {
  return Math.floor(Math.random() * arr.length);
}

export default function dataGeneration(task_amount) {
  const first_word = [
    "Создать",
    "Написать",
    "Разработать",
    "Нарисовать",
    "Спроектировать",
    "Создать и спроектировать",
    "Протестировать",
  ];
  const second_word = [
    "модальное окно",
    "главный компонент",
    "основную страницу сайта",
    "дочерний компонент страницы товаров и услуг",
    "выпадающий список",
    "кнопочку",
    "выпадающий список с товарами",
  ];
  const name_list = [
    "Иван",
    "Михаил",
    "Игорь",
    "Максим",
    "Гриша",
    "Артем",
    "Никита",
  ];
  const surname_list = [
    "Иванов",
    "Петров",
    "Васечкин",
    "Сидоров",
    "Чупин",
    "Виноградов",
    "Мармеладов",
    "Шоколадов",
  ];
  const status_list = ["PLAN", "IN PROGRESS", "TESTING", "DONE"];
  const importance = [
    { priority: 1, value: "MUST" },
    { priority: 2, value: "SHOULD" },
    { priority: 3, value: "COULD" },
  ];

  let task_list = [];

  for (let i = 0; i < task_amount; i++) {
    task_list.push({
      task_number: i + 1,
      name: name_list[getRand(name_list)],
      surname: surname_list[getRand(surname_list)],
      task_name:
        first_word[getRand(first_word)] +
        " " +
        second_word[getRand(second_word)],
      status: status_list[getRand(status_list)],
      importance: importance[getRand(importance)],
      dateAmount: new Date().toLocaleDateString(),
    });
  }

  return task_list;
}
