"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { toast } from "sonner"

export function AuthForm() {
  const { t } = useLanguage()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isLogin) {
        // 登录逻辑
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("username", formData.username)
          .single()

        if (error) throw error

        if (!data || data.password_hash !== formData.password) {
          toast.error(t("invalid_credentials"))
          return
        }

        // 登录成功
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userId", data.id)
        toast.success(t("login_success"))
        router.refresh()
      } else {
        // 注册逻辑
        const { data: existingUser } = await supabase
          .from("users")
          .select()
          .eq("username", formData.username)
          .single()

        if (existingUser) {
          toast.error(t("username_taken"))
          return
        }

        const { error } = await supabase.from("users").insert([
          {
            username: formData.username,
            password_hash: formData.password,
          },
        ])

        if (error) throw error

        toast.success(t("register_success"))
        setIsLogin(true)
      }
    } catch (error) {
      console.error("Auth error:", error)
      toast.error(t("auth_error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? t("login_title") : t("register_title")}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("username")}
          </label>
          <Input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("password")}
          </label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading
            ? t("loading")
            : isLogin
            ? t("login")
            : t("register")}
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="w-full"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? t("need_register") : t("need_login")}
        </Button>
      </form>
    </div>
  )
} 