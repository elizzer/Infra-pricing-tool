const axios = require('axios');

async function AWS_EC2(url,location) {
  try {
    // const url = `https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/${instance}/${location}/${os}/NA/Shared/index.json`;
    // console.log(url)
    const response = await axios(url);
    return response.data.regions[location]['EC2InstanceSavingsPlans 3 year No Upfront'].price * 730;
  } catch (error) {
    console.error('Error fetching AWS EC2 pricing data:');
    throw error;
  }
}

async function RDS_SQL_server(url,location) {
  try {
    // const url = `https://calculator.aws/pricing/2.0/meteredUnitMaps/rds/USD/current/rds-sqlserver-calc/US%20East%20(N.%20Virginia)/OnDemand/License%20included/db.m5.large/2/8%20GiB/Multi-AZ/Standard/index.json`;
    const response = await axios(url);
    return response.data.regions[location]['OnDemand License included db.m5.large Multi-AZ Standard Hrs'].price * 730;
  } catch (error) {
    console.error('Error fetching AWS RDS pricing data:');
    throw error;
  }
}

async function calculatePrices(products) {
  let sum=0
  for (const product of products) {
    console.log(product.name,product.instance);
    let price;
    if (product.name === "EC2") {
      price = await AWS_EC2(product.url,product.location);
      sum=sum+price
    } else {
      price = await RDS_SQL_server(product.url,product.location);
      sum=sum+price

    }
    console.log(`Price for ${product.name}: ${price}`);
  }
  return sum
}

const products = [
  {
    name: "RDS_SQL_server",
    location: "US East (N. Virginia)",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/rds/USD/current/rds-sqlserver-calc/US%20East%20(N.%20Virginia)/OnDemand/License%20included/db.m5.large/2/8%20GiB/Multi-AZ/Standard/index.json"
  },
  {
    name: "EC2",
    instance: "m5.2xlarge",
    location: "US East (N. Virginia)",
    os: "Linux",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/m5.2xlarge/US%20East%20(N.%20Virginia)/Linux/NA/Shared/index.json"
  },
  {
    name: "EC2",
    instance: "m5.large",
    location: "US East (N. Virginia)",
    os: "Windows Server",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/m5.large/US%20East%20(N.%20Virginia)/Windows/NA/Shared/index.json"
  },
  {
    name: "EC2",
    instance: "m5.xlarge",
    location: "US East (N. Virginia)",
    os: "Linux",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/m5.xlarge/US%20East%20(N.%20Virginia)/Linux/NA/Shared/index.json"
  },
  {
    name: "EC2",
    instance: "m5.xlarge",
    location: "US East (N. Virginia)",
    os: "Windows Server",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/m5.xlarge/US%20East%20(N.%20Virginia)/Windows/NA/Shared/index.json"
  },
  {
    name: "EC2",
    instance: "t2.large",
    location: "US East (N. Virginia)",
    os: "Linux",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/t2.large/US%20East%20(N.%20Virginia)/Linux/NA/Shared/index.json"
  },
  {
    name: "EC2",
    instance: "c4.large",
    location: "US East (N. Virginia)",
    os: "Linux",
    url:"https://calculator.aws/pricing/2.0/meteredUnitMaps/computesavingsplan/USD/current/compute-instance-savings-plan-ec2-calc/c4.large/US%20East%20(N.%20Virginia)/Linux/NA/Shared/index.json"
  }
];


async function GetAllPrice(){
  const tp=await calculatePrices(products)
  return tp;
}

module.exports=GetAllPrice