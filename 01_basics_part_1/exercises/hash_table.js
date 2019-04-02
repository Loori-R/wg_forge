/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    if (typeof key !== 'string') { return 'key must be a string' }
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const code = key.charCodeAt(i);
      hash += code | 0;
    }
    return hash;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    const address = this.hashKey(key);
    return this.memory[address]
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    const address = this.hashKey(key);
    this.memory[address] = value;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    const address = this.hashKey(key);
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}
