import lms from '@/hooks/lmsroutes';
import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
const Form = () => {
const [organisations, setOrganisations] = useState();
const [timezoneoptions, setTimezoneoptions] = useState();
const { data, setData,register, control ,handleSubmit, post, processing, errors, reset } = useForm();
//     {
//     parent_organisation_id: '',
//     name:  '',
//     url:  '',
//     active:  false,
//     use_organisation_structure:  false,
//     use_usi:  false,
//     from_email: '',
//     identity_verification_email: '',
//     time_zone: '',
//     trial_end: '',
//     email_template: '',
//     logo: null,
//     background_image: null,
//     background_position: '',
//     background_size: '',
//     background_repeat: '',
//     background_color: '',
//     print_logo: '',
//     footer_text: '',
//     restrict_by_ip: '',
//     enable_eway: false,
//     eway_test_mode: false,
//     eway_customer_id: '',
//     eway_user_name: '',
//     enable_stripe: false,
//     stripe_secret_key: '',
//     stripe_publishable_key: '',
//     welcome_email: '',
//     set_password_email: '',
//     new_course_email: '',
//     course_complete_email: '',
//     terms_and_conditions: '',
//     identity_requirements: '',
//     invoice_address: '',
//     invoice_thankyou_message: '',
//     avetmiss_privacy_notice: '',
// }



useEffect(() => {
    axios.get(lms.organisation.autocomplete).then(response=>{
        // console.log(response.data);
        setOrganisations(response.data.organisations.data);
    });
    axios.get(lms.timezone.autocomplete).then(response=>{
        // console.log(response.data);
        const timezones=response.data.timezones.data.map((value,index)=>{
            return { value: value.time_zone, label: value.time_zone }
        });
        setTimezoneoptions(timezones);
    });
}, []);



const onChangeOrganisation = (data) => {
    console.log(data);
    // setData('parent_organisation_id', data.value);
    // let changetext=document.querySelector('.option-parent_organisation_id>div>div>div');
    // if(data.label){
    //      changetext.textContent=data.label;
    // }
}

// const onchnageTimeZone=(data)=>{
//     setData('time_zone',data.value);
// }

const onHandleChange = (event) => {
    // setData(event.target.name, event.target.type === 'checkbox' ? event.target.value : event.target.value);
    // let element = document.getElementById(event.target.id).nextElementSibling;
    // if(element && event.target.name!=='send_password_email'){
    //     element.remove();
    // }
    // console.log(event.target.name,event.target.value);
};

const onFileHandleChange=(event)=>{
    console.log(e);
}

const submit=(data,e)=>{
    console.log(data);
}
const onError = (errors, e) => console.log(errors, e);


return (
    <div className="p-3">
    <form className="w-full" onSubmit={handleSubmit(submit, onError)}>
                {/* orgnaisation parent id field */}
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Parent Orgsanisation
                    </label>
                    </div>
                    <div className="md:w-3/4">
                    <Select
                        className='option-parent_organisation_id'
                        id="parent_organisation_id"
                        name="parent_organisation_id"
                        options={organisations}
                        onChange={onChangeOrganisation}
                        isSearchable={true}
                        placeholder='Select Oraganisation'
                        getOptionLabel={(onChangeOrganisation) => onChangeOrganisation['label']}
                        getOptionValue={(onChangeOrganisation) => onChangeOrganisation['value']}
                    />

                    </div>
                </div>

                {/* orgnaisation name field */}
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 required" htmlFor="name">
                        Name
                    </label>
                    </div>
                    <div className="md:w-3/4">
                    <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="name" type="text" {...register("name")}
                    placeholder='Name'
                    />
                    {errors && errors.title && (
                    <div className="mb-3 text-normal text-red-500 ">{errors.title.message}</div>
                    )}
                    </div>
                </div>

                {/* orgnaisation url field */}
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 required" htmlFor="url">
                        Url
                    </label>
                    </div>
                    <div className="md:w-3/4">
                    <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="url" type="text" {...register("url")}
                    placeholder='Url'
                    />
                    </div>
                </div>

                {/* orgnaisation active field */}
                <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="active">
                    Active
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="active"
                type="checkbox"
                {...register("active")}

                />
                </div>
            </div>


            {/* orgnaisation use_organisation_structure field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="use_organisation_structure">
                    User Organisation Structure
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="use_organisation_structure" type="checkbox" {...register("use_organisation_structure")}
                value='1'
                />
                </div>
            </div>

            {/* orgnaisation use_usi field */}
                <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="use_organisation_structure">
                    User Usi
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="use_usi" type="checkbox" {...register("use_usi")}
                value='1'
                />
                </div>
            </div>

            {/* orgnaisation From Email field */}
                <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 required" htmlFor="from_email">
                From Email
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="from_email" type="email" {...register("from_email")}
                placeholder="From Email"
                />
                </div>
            </div>

            {/* orgnaisation identity_verification_email field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 required" htmlFor="identity_verification_email">
                Identity Verification Email
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="identity_verification_email" type="text" {...register("identity_verification_email")}
                placeholder="Identity Verification Email"
                />
                </div>
            </div>


            {/* orgnaisation time zone field */}
            <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="time_zone">
            Time Zone
            </label>
            </div>
            <div className="md:w-3/4">
            <Controller
            control={control}
            name="time_zone"
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                // value={timezoneoptions.filter(option => option.value === data.time_zone)}
                options={timezoneoptions}
                isSearchable={true}
                placeholder='Select Time Zone'
                // getOptionLabel={(onchnageTimeZone) => onchnageTimeZone['label']}
                // getOptionValue={(onchnageTimeZone) => onchnageTimeZone['value']}
                />
            )}
          />
           
            </div>
        </div>


        {/* orgnaisation trial end field */}
        <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="trial_end">
            Trial End
            </label>
            </div>
            <div className="md:w-3/4">
            <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="trial_end" type="text" {...register("trial_end")}
            onChange={onHandleChange}
            />
            </div>
        </div>

        {/* orgnaisation email template field */}
        <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email_template">
            Email Template
            </label>
            </div>
            <div className="md:w-3/4">
            <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="email_template" type="text" {...register("email_template")}
            onChange={onHandleChange}
            />
            </div>
        </div>

          {/* orgnaisation logo field */}
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="logo">
            Logo
            </label>
            </div>
            <div className="md:w-3/4">
            <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="logo" type="file" {...register("logo")}
            />
            
            </div>
          </div>  

           {/* orgnaisation background image field */}
           <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="background_image">
            Background Image
            </label>
            </div>
            <div className="md:w-3/4">
            <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="background_image" type="file"  {...register("background_image")}
            />
           
                </div>
            </div>

            {/* orgnaisation background position field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="background_position">
                    Background Position
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="background_position" type="text" {...register("background_position")}
                />
                </div>
            </div>

             {/* orgnaisation background size field */}
             <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="background_size">
                Background Size
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="background_size" type="text" {...register("background_size")}
                />
                </div>
            </div>

            {/* orgnaisation background repeat field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="background_repeat">
            Background Repeat
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="background_repeat" type="text" {...register("background_repeat")}
                />
                </div>
            </div>

            {/* orgnaisation background color field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="background_repeat"> Background Color
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="background_color" type="text" {...register("background_color")}
                />
                </div>
            </div>

            {/* orgnaisation print logo field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="print_logo">
            Print Logo
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="print_logo" type="text" {...register("print_logo")}
                
                />
                </div>
            </div>

             {/* orgnaisation footer text field */}
             <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="footer_text">
                Footer Text
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="footer_text" type="text" {...register("footer_text")}
               />
                </div>
            </div>   

            {/* orgnaisation restrict by ip field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="restrict_by_ip">
            Restrict By Ip
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="restrict_by_ip" type="text" {...register("restrict_by_ip")}
                />
                </div>
            </div>

             {/* orgnaisation enable_eway field */}
             <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="enable_eway">
                    Enable Eway
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="enable_eway" type="checkbox" {...register("enable_eway")}
                />
                </div>
            </div>

            {/* orgnaisation eway_test_mode field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="eway_test_mode">
                Eway Test Mode
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="eway_test_mode" type="checkbox" {...register("eway_test_mode")}
                />
                </div>
            </div>

            {/* orgnaisation restrict by ip field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="eway_customer_id">
                Eway Customer Id
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="eway_customer_id" type="text" {...register("eway_customer_id")}
                />
                </div>
            </div>

            {/* orgnaisation restrict by ip field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="eway_user_name">
                Eway User Name
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="eway_user_name" type="text" {...register("eway_user_name")}
               />
                </div>
            </div>

            {/* orgnaisation enable_stripe field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="enable_stripe">
                    Enable Stripe
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="enable_stripe" type="checkbox" {...register("enable_stripe")}
                />
                </div>
            </div>

            {/* orgnaisation Stripe Secret Key field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="stripe_secret_key">
                Stripe Secret Key
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="stripe_secret_key" type="text" {...register("stripe_secret_key")}
               />
                </div>
            </div>

            {/* orgnaisation Stripe Publishable Key field */}
            <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="stripe_publishable_key">
                Stripe Publishable Key
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#273135]" id="stripe_publishable_key" type="text" {...register("stripe_publishable_key")}
                />
                </div>
            </div>


      <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
    </form>
    </div>
)
}

export default Form
