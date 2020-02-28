<template>
  <div>
    <a-form :form="form">
      <a-form-item label="对象" required>
        <a-radio-group v-decorator="['send_to']">
          <a-radio value="x1">按x1</a-radio>
          <a-radio value="x2">按x2</a-radio>
          <a-radio value="x3">按x3</a-radio>
        </a-radio-group>
        <show-page :switchParams="switchMethod()"></show-page>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import showPage from "./components/index.js";
export default {
  components: {
    showPage
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  mounted() {this.assignmentParams()},
  methods: {
    switchMethod() {
      return this.form.getFieldValue("send_to");
    },
    assignmentParams() {
      const {
        form: { setFieldsValue }
      } = this;
      setFieldsValue({
        send_to: "x2"
      });
    }
  }
};
</script>
