<template>
    <Layout class="layout__content--lightgray">
        <div class="container container--padding">
            <h2 class="text-xl margin">Напишите нам</h2>
            <form action="https://getform.io/f/cb6a6708-152e-4f90-993b-1faff90d5feb" method="POST" class="main-form">
                <input type="text" name="name" class="form-control" placeholder="Имя">
                <input type="email" name="email" class="form-control" placeholder="Email">
                <textarea name="message" class="form-control main-form__control--full" placeholder="Сообщение"></textarea>
                <div class="main-form__submit-wrapper">
                    <button type="submit" class="button">Отправить</button>
                </div>
            </form>
        </div>

    </Layout>

</template>

<script>
    export default {
        name: "Contacts.vue"
    }
</script>

<style scoped lang="scss">

    .form-control {
        min-height: 60px;
        padding: 27px;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        color: #616160;
        border: none;
        background: #FFFFFF;
        -webkit-appearance: none;
        font-family: 'Inter', sans-serif, Arial;
    }

    .main-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background: var(--color-gray-lighten);
    }

    .main-form__submit-wrapper {
        padding-top: 8px;
    }

    .main-form__control--full {
        grid-column: 1 / -1;
    }
</style>
