<template>
  <div class="container">
    <div class="activity-main">
      <div class="activity-main__item">
        <h1 class="activity-main__title">{{title}}</h1>
        <p class="activity-main__date">18.02 - 25.03.20</p>
      </div>
      <div class="activity-main__item">
        <p class="activity-main__desc">
          до начала
          <br />мероприятия осталось:
        </p>
        <div class="activity-timer">
          <div class="activity-timer__item">
            <span class="activity-timer__value">25</span>
            <span class="activity-timer__text">Дней</span>
          </div>
          <div class="activity-timer__item">
            <span class="activity-timer__value">48</span>
            <span class="activity-timer__text">Часов</span>
          </div>
          <div class="activity-timer__item">
            <span class="activity-timer__value">34</span>
            <span class="activity-timer__text">Минуты</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ActivityCard",
  props: ["title", "date"]
};
</script>

<style lang="scss">
.activity-main {
  margin-top: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
}

.activity-main__item {
  flex: 1;
  padding-right: 50px;
}

.activity-main__title {
  font-size: 36px;
  line-height: 47px;
  letter-spacing: 0.5px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.activity-main__date {
  font-weight: 600;
  font-size: 18px;
}

.activity-main__desc {
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
  margin-bottom: 30px;
}

.activity-timer {
  display: flex;
}

.activity-timer__item {
  display: flex;
  align-items: baseline;

  & + & {
    margin-left: 30px;
  }
}

.activity-timer__value {
  background: #33BE41;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 30px;
  font-weight: 800;
  color: var(--color-white);
}

.activity-timer__text {
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
}
</style>
