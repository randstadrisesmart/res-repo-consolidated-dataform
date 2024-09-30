
const starttime = `CURRENT_TIMESTAMP()`;
const dfm_name = "'dataform-blue-cnsd-emea'"; // update this when pull updated code from another region form

// Assignment tables

function anmz_asgm_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_assignment_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_assignment_stdschema`
    }   
}

function src_asgm_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_assignment`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_assignment`
    }   
}

function intrmed_asgm_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_emea_msp_assignment`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_nam_msp_assignment`
    }   
}

function rpt_asgm_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_assignment`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_assignment`
    }   
}

// Assignment Trend tables
function anmz_asgm_trend_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_assignment_trend_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_assignment_trend_stdschema`
    }   
}

function src_asgm_trend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_assignment_trend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_assignment_trend`
    }   
}

function intrmed_asgm_trend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_emea_msp_assignment_trend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_nam_msp_assignment_trend`
    }   
}

function rpt_asgm_trend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_assignment_trend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_assignment_trend`
    }   
}

// Requisition tables
function anmz_requisition_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_requisition_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_requisition_stdschema`
    }   
}

function src_req_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_requisition`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_requisition`
    }   
}

function intrmed_req_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_emea_msp_requisition`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_nam_msp_requisition`
    }   
}

function rpt_req_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_requisition`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_requisition`
    }   
}

// Candidate tables
function anmz_candidate_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_candidate_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_candidate_stdschema`
    }   
}

function src_candidate_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_candidate`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_candidate`
    }   
}

function intrmed_candidate_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_emea_msp_candidate`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_nam_msp_candidate`
    }   
}

function rpt_candidate_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_candidate`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_candidate`
    }   
}

// Spend tables
function anmz_spend_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_spend_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_spend_stdschema`
    }   
}

function src_spend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_spend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_spend`
    }   
}

function intrmed_spend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_emea_msp_spend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_nam_msp_spend`
    }   
}

function rpt_spend_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_spend`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_spend`
    }   
}

// Requisition Distribution tables
function anmz_req_distribution_dataset_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_anmz_emea_requisition_distribution_stdschema`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_anmz_nam_requisition_distribution_stdschema`
    }   
}

function src_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.src_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.src_nam_msp_req_distribution`
    }   
}

function intrmed_1_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_1_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_1_nam_msp_req_distribution`
    }   
}

function intrmed_2_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_2_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_2_nam_msp_req_distribution`
    }   
}

function intrmed_3_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_3_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_3_nam_msp_req_distribution`
    }   
}

function intrmed_4_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_4_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_4_nam_msp_req_distribution`
    }   
}

function intrmed_5_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.intrmed_5_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.intrmed_5_nam_msp_req_distribution`
    }   
}

function rpt_req_distribution_tbl_name() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.rpt_emea_msp_req_distribution`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.rpt_nam_msp_req_distribution`
    }   
}

//  ------------------------------------------------------------------------------------------------

function tbl_execution_log() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_blue_cnsd.execution_logs`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_nam_blue_cnsd.execution_logs`
    }   
}

function var_dataform_region() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `'europe-west1'`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `'us-east1'`
    }   
}

function lkp_global_industry_mapping() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_common_emea.global_industry_mapping`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_common.global_industry_mapping`
    }   
}

function lkp_normalization_location_country() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_norm_emea.normalization_location_country`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_norm_nam.normalization_location_country`
    }   
}

function lkp_normalization_location() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_norm_emea.normalization_location`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_norm_nam.normalization_location`
    }   
}

function lkp_normalization_job_title() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_norm_emea.normalization_job_title`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_norm_nam.normalization_job_title`
    }   
}

function lkp_msp_slsfrc_nam_aptus_derv_vms_join_unique() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_aptus.msp_slsfrc_nam_aptus_derv_vms_join_unique`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_aptus.msp_slsfrc_nam_aptus_derv_vms_join_unique`
    }   
}

function lkp_config_supplier_type_logic() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_emea_aptus.config_supplier_type_logic`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_aptus.config_supplier_type_logic`
    }   
}

function lkp_misc_slsfrc_gbl_paap_derv_gcp_client_code_dedup() {
    if (dataform.projectConfig.defaultLocation == 'europe-west1'){
        return `db_gbl_people_analytics_and_performance_emea.misc_slsfrc_gbl_paap_derv_gcp_client_code_dedup`
    }
    else if (dataform.projectConfig.defaultLocation == 'us-east1') {
        return `db_gbl_people_analytics_and_performance.misc_slsfrc_gbl_paap_derv_gcp_client_code_dedup`
    }   
}


module.exports = {
    starttime,
    dfm_name,
    anmz_asgm_dataset_name,
    anmz_asgm_trend_dataset_name,
    anmz_requisition_dataset_name,
    anmz_candidate_dataset_name,
    anmz_spend_dataset_name,
    anmz_req_distribution_dataset_name,
    src_asgm_tbl_name,
    intrmed_asgm_tbl_name,
    rpt_asgm_tbl_name,
    src_asgm_trend_tbl_name,
    intrmed_asgm_trend_tbl_name,
    rpt_asgm_trend_tbl_name,
    src_req_tbl_name,
    intrmed_req_tbl_name,
    rpt_req_tbl_name,
    src_candidate_tbl_name,
    intrmed_candidate_tbl_name,
    rpt_candidate_tbl_name,
    src_req_distribution_tbl_name,
    intrmed_1_req_distribution_tbl_name,
    intrmed_2_req_distribution_tbl_name,
    intrmed_3_req_distribution_tbl_name,
    intrmed_4_req_distribution_tbl_name,
    intrmed_5_req_distribution_tbl_name,
    rpt_req_distribution_tbl_name,
    src_spend_tbl_name,
    intrmed_spend_tbl_name,
    rpt_spend_tbl_name,
    tbl_execution_log,
    var_dataform_region,
    lkp_global_industry_mapping,
    lkp_normalization_location_country,
    lkp_normalization_location,
    lkp_normalization_job_title,
    lkp_msp_slsfrc_nam_aptus_derv_vms_join_unique,
    lkp_config_supplier_type_logic,
    lkp_misc_slsfrc_gbl_paap_derv_gcp_client_code_dedup
}








