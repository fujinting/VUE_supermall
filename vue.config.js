module.exports={
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                //已经默认配置了@ 为 src
                //router和store也不用配置，因为this.$router可以直接拿来用
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}
