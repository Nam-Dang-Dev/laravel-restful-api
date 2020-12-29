<template>
    <CRow>
      <CCol md="12">
        <CCardHeader>
          Customer Management
          <br/>
          <CCol class="d-none d-md-block">
            <CButton color="primary" class="float-right"  @click="openModal()">
                Create
            </CButton>
          </CCol>
          <CCardBody>
            <br/>
            <CDataTable
              v-if="customers.length"
              class="mb-0 table-outline"
              hover
              :items="customers"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{item}">
                <div class="c-avatar">
                  <img src="img/avatars/1.jpg" class="c-avatar-img" alt="">
                  <span
                    class="c-avatar-status bg-success"
                  ></span>
                </div>
              </td>
              <td slot="activity" slot-scope="{item}">
                <b-button variant="danger" @click="deleteModal(item.id)">Delete</b-button>
                <CButton color="dark" @click="openModal(item)" class="mr-1">
                  Update
                </CButton>
              </td>
            </CDataTable>
          </CCardBody>
        </CCardHeader>
      </CCol>
      <CModal
        :show.sync="isModal"
        :no-close-on-backdrop="true"
        :centered="true"
        title="Update customer"
        size="lg"
        color="success"
      >
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CInput
                label="First Name"
                placeholder="Enter your First Name"
                v-model = "properties.first_name"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
              <CInput
                label="Last Name"
                placeholder="Enter your Last Name"
                v-model = "properties.last_name"
              />
            </CCol>
          </CRow>
        </CCardBody>
        <template #header>
          <h6 class="modal-title">Update Customer</h6>
          <CButtonClose @click="isModal = false" class="text-white"/>
        </template>
        <template #footer>
          <CButton @click="isModal = false" color="danger">Cancel</CButton>
          
          <CButton v-if="type === 'update'" @click="updateCustomer(properties)" color="success">Submit</CButton>
          <CButton v-else @click="createCustomer(properties)" color="success">Create</CButton>
        </template>
      </CModal>
    </CRow>

    
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue'
  export default {
    data() {
      return {
        isLoading: false,
        tableFields: [
          { key: 'avatar', label: 'Avatar', _classes: 'text-center' },
          { key: 'full_name' },
          { key: 'activity' },
        ],
        isModal: false,
        properties: {
          first_name: '',
          last_name: ''
        },
        type: 'create'
      }
    },
    components: {
      BButton, BModal
    },
    directives: { BButton, BModal },
    async mounted() {
      this.$store.dispatch("customer/getCustomers")
    },
    computed: {
      customers () {
        let customers =  this.$store.state.customer.customers
        customers = customers.map(customer => {
          customer.full_name = `${customer.first_name} ${customer.last_name}`
          return customer
        })
        return customers
      }
    },
    methods: {
      color (value) {
        let $color
        if (value <= 25) {
          $color = 'info'
        } else if (value > 25 && value <= 50) {
          $color = 'success'
        } else if (value > 50 && value <= 75) {
          $color = 'warning'
        } else if (value > 75 && value <= 100) {
          $color = 'danger'
        }
        return $color
      },
      openModal(customer){
        this.isModal = !this.isModal
        if(customer){
          this.properties = customer
          this.type = 'update'
        }else{
          this.type = 'create'
        }
      },
      updateCustomer(customer){
        this.$store.dispatch("customer/updateCustomer", customer)
        this.isModal = !this.isModal
      },
      deleteModal(id){
        this.$store.dispatch("customer/deleteCustomer", id)
      },
      createCustomer(customer){
        this.$store.dispatch("customer/createCustomer", customer)
        this.isModal = !this.isModal
      }
    }
  };
</script>
