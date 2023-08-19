import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/Button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/Card";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <Card>
                <CardHeader>
                    <CardTitle>Email Verification</CardTitle>
                    <CardDescription>
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                        {status === "verification-link-sent" && (
                            <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </div>
                        )}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-3">
                        <div className="mt-4 flex items-center justify-between">
                            <Button disabled={processing}>
                                Resend Verification Email
                            </Button>

                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}